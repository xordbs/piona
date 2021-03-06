package com.jeans.bloom.api.service;

import com.jeans.bloom.api.request.WishListReq;
import com.jeans.bloom.api.response.WishListRes;
import com.jeans.bloom.db.entity.WishList;

import java.util.List;

public interface WishListService {
    void insertWishList(WishListReq wishList) throws Exception;

    void deleteWishList(int wishId) throws Exception;

    List<WishListRes> findWishListByUser_UserId(String userId) throws Exception;

    WishList findWishListByUser_UserIdAndShop_ShopNumber(String userId, String shopNumber) throws Exception;

}
