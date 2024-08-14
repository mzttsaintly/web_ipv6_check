import api from '../index'


export default {
    getEmbyIpv6Address: () => api.get('http://119.29.253.43')
}