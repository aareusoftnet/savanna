import React, { memo, useEffect, useState } from "react";
import Pagination from "../../utils/pagination";
import styles from "./styles";
import Item from "./item";

import { ActivityIndicator, FlatList, RefreshControl } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useIsFocused } from "@react-navigation/native";
import { AppColors, AppStyles } from "../../constants";
import { useQuery } from "@apollo/react-hooks";
import { View } from "../../components";
import { Query } from "../../services";

const CheckIns = () => {
  const [flatListData, setFlatListData] = useState([]);
  const [indicatorInfo, setIndicatorInfo] = useState({
    isLoading: true,
    isLoadMore: false,
    isPullToRefresh: false,
  });
  const { bottom } = useSafeAreaInsets();
  const isFocused = useIsFocused();
  const listSortingOrder = "desc";
  let pagination = React.useRef(new Pagination());

  const { fetchMore, refetch } = useQuery(Query.CHECK_INs, {
    fetchPolicy: "no-cache",
    nextFetchPolicy: "no-cache",
    variables: {
      orderBy: [
        {
          created_at: listSortingOrder,
        },
      ],
      limit: 10,
      offset: 0,
    },
    onCompleted: (data) => {
      handleAPIResponse(data, true, false);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleAPIResponse = (data, isRefreshList, isLoadMoreList) => {
    const checkIns = data.check_in;
    if (checkIns.length !== 0 && pagination.current.isAllLoaded === false) {
      if (isLoadMoreList) {
        setFlatListData(flatListData.concat(checkIns));
      } else if (isRefreshList) {
        setFlatListData(checkIns);
      }
    } else {
      pagination.current.isAllLoaded = true;
    }
    pagination.current.isLoading = false;
    setIndicatorInfo({
      ...indicatorInfo,
      isLoading: false,
      isPullToRefresh: false,
      isLoadMore: false,
    });
  };

  useEffect(() => {
    if (
      indicatorInfo.isLoading === false &&
      isFocused &&
      pagination.current.isLoading === false
    ) {
      onPullToRefresh();
    }
  }, [isFocused]);

  const renderIndicatorUIs = () => {
    if (indicatorInfo.isLoading === true && flatListData.length === 0) {
      return (
        <ActivityIndicator
          style={{ flex: 1, alignSelf: "center" }}
          size={"large"}
          color={AppColors.app171A1F}
          hidesWhenStopped={true}
          animating={indicatorInfo.isLoading}
        />
      );
    } else {
      return null;
    }
  };

  const onPullToRefresh = () => {
    setIndicatorInfo({ ...indicatorInfo, isPullToRefresh: true });
    pagination.current = new Pagination();
    refetch({
      orderBy: [
        {
          created_at: listSortingOrder,
        },
      ],
      limit: 10,
      offset: 0,
    }).then(({ data }) => {
      handleAPIResponse(data, true, false);
    });
  };

  const renderRefreshControllUIs = () => {
    return (
      <RefreshControl
        refreshing={indicatorInfo.isPullToRefresh}
        onRefresh={() => onPullToRefresh()}
      />
    );
  };

  const renderItemUIs = (item, index) => {
    return <Item key={item.id} marginTop={index === 0 ? 0 : 16} item={item} />;
  };

  const renderListFooterUIs = () => {
    return (
      indicatorInfo.isLoadMore && (
        <View
          marginTop={20}
          height={40}
          marginBottom={20}
          justifyContent={AppStyles.FlexAlignType.center}
        >
          <ActivityIndicator
            animating={indicatorInfo.isLoadMore}
            hidesWhenStopped={true}
            size={"large"}
            color={AppColors.app171A1F}
          />
        </View>
      )
    );
  };

  const handleLoadMore = () => {
    if (
      pagination.current.isLoading === false &&
      pagination.current.isAllLoaded === false
    ) {
      pagination.current.isLoading = true;
      setIndicatorInfo({ ...indicatorInfo, isLoadMore: true });
      fetchMore({
        variables: {
          orderBy: [
            {
              created_at: listSortingOrder,
            },
          ],
          offset: flatListData.length,
        },
      }).then(({ data }) => {
        handleAPIResponse(data, false, true);
      });
    }
  };

  const renderCheckInListUIs = () => {
    if (flatListData.length !== 0) {
      return (
        <FlatList
          contentContainerStyle={styles.contentContainer}
          data={flatListData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => renderItemUIs(item, index)}
          contentInset={{ top: 0, left: 0, bottom: bottom, right: 0 }}
          refreshControl={renderRefreshControllUIs()}
          ListFooterComponent={() => renderListFooterUIs()}
          onEndReachedThreshold={1.0}
          onEndReached={() => handleLoadMore()}
        />
      );
    } else {
      return null;
    }
  };

  return (
    <View flex={1} backgroundColor={AppColors.appF1F1F1}>
      {renderIndicatorUIs()}
      {renderCheckInListUIs()}
    </View>
  );
};

export default memo(CheckIns);
