package com.devd.spring.bookstoreorderservice.service;



import com.devd.spring.bookstoreorderservice.web.CreateAddressRequest;
import com.devd.spring.bookstoreorderservice.web.GetAddressResponse;
import com.devd.spring.bookstoreorderservice.web.UpdateAddressRequest;

import java.util.List;

/**
 * @author: Devaraj Reddy, Date : 2019-09-27
 */
public interface AddressService {

  void createAddress(CreateAddressRequest createAddressRequest);

  List<GetAddressResponse> getAddress();

  void updateAddress(UpdateAddressRequest updateAddressRequest);

  GetAddressResponse getAddressById(String addressId);

  void deleteAddressById(String addressId);
}
