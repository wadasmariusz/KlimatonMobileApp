import {useQuery} from "react-query";

const useQuery2 = ({
  queryKey:_queryKey,
  queryFn,
  config,
  isArray = false,
}) => {
  const [,...queryKey] = _queryKey;

  const {
    data,
    status,
    ...rest
  } = useQuery(
    _queryKey,
    () => queryFn(queryKey),
    config,
  );

  return {
    data: status==='success' ? data : (isArray ? [] : {}),
    status,
    ...rest
  };
}

export default useQuery2;