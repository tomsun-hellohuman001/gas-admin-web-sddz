import request from '@/utils/request-back'

export function fetchAllOilCompany() {
  return request({
    //    url: '/admin/oilCompany/all',
    url: '/oilCompany/showOilCompanybyCondition',
    method: 'get'
  })
}

export function fetchStationList(query) {
  return request({
    url: '/gasStaion/showGasStationbyCondition',
    method: 'get',
    params: query
  })
}

