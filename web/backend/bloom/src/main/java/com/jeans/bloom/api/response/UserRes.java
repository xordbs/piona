package com.jeans.bloom.api.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.jeans.bloom.db.entity.User;
import com.jeans.bloom.db.entity.type.UserCode;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

/**
 * OYT | 2022.05.04
 * @name UserRes
 * @des 회원 정보를 리턴하기 위한 DTO
 */
@Getter
@Setter
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL) //null 데이터 전송 x
public class UserRes {

    String user_id;
    String name;
    String nickname;
    String phone;
    String shop_number;
    String access_token;
    String refresh_token;
    UserCode user_code;

    public static UserRes of(User user){
        if(user.getUserCode() == UserCode.A){
            return UserRes.builder()
                    .user_id(user.getUserId())
                    .shop_number(null)
                    .name(user.getName())
                    .phone(user.getPhone())
                    .access_token(user.getAccessToken())
                    .refresh_token(user.getRefreshToken())
                    .user_code(user.getUserCode())
                    .build();
        }else{
            return UserRes.builder()
                    .user_id(user.getUserId())
                    .shop_number(user.getShop().getShopNumber())
                    .name(user.getName())
                    .phone(user.getPhone())
                    .access_token(user.getAccessToken())
                    .refresh_token(user.getRefreshToken())
                    .user_code(user.getUserCode())
                    .build();
        }
    }
}
