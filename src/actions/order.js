export const setOrder = (res) => ({
  type: 'SET_ORDER',
  res
})

export const showCreditCardDetails = (res) => ({
  type: 'SHOW_CREDIT_CARD_DETAILS',
  res
})

export const setAvailableShippingZone = (res, billing_address) => ({
  type: 'SET_AVAILABLE_SHIPPING_ZONE',
  res,
  billing_address
})
