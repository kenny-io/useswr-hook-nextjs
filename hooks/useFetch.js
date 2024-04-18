import useSWR from "swr";

export default function useFetch({ count }) {
  const address = `https://randomuser.me/api/?results=${count}&seed=abcd`;

  const { data, error, isLoading } = useSWR(address);

  return { data, error, isLoading };
}
