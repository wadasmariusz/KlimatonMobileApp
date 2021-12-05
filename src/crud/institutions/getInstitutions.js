import axios from 'axios';
import useQuery2 from '../../hooks/useQuery2'; 
import { getAPIAddress } from '../../helpers/networkService'; 

const getInstitutions = () => axios({
  method: 'GET',
  url: getAPIAddress(`institutions`)
}).then(({data}) => data);

export const useGetInstitutions = () => useQuery2({
  queryKey: ['institutions'],
  queryFn: getInstitutions,
  isArray: true,
});