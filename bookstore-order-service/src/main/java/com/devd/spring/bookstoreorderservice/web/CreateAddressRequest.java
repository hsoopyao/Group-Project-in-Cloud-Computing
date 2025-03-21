package com.devd.spring.bookstoreorderservice.web;

import lombok.*;

import javax.validation.constraints.Pattern;

/**
 * @author: Devaraj Reddy,
 * Date : 2019-09-20
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CreateAddressRequest {

    @NonNull
    private String addressLine1;
    private String addressLine2;

    @NonNull
    private String city;

    @NonNull
    private String state;

    @NonNull
    private String postalCode;

    @Pattern(regexp = "[A-Z]{2}", message = "2-letter ISO country code required")
    @NonNull
    private String country;

    @NonNull
    private String phone;

}
