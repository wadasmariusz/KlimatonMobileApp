import axios from 'axios';
import useQuery2 from '../../hooks/useQuery2'; 
import { getAPIAddress } from '../../helpers/networkService'; 

const getSensors = () => axios({
  method: 'GET',
  url: getAPIAddress(`sensors`)
}).then(({data}) => data);

export const useGetSensors = () => useQuery2({
  queryKey: ['sensors'],
  queryFn: getSensors,
  isArray: true,
});