import api from '../index'


export default {
    testIpv6: () => api.get('https://api6.ipify.org/?format=json')
}