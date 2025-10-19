import { useQuery } from "@tanstack/react-query";

interface IResponseData {
  success: boolean;
  products: IProductProps[];
}

interface IProductProps {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

const RequestProductData = async () => {
  const response = await fetch(
    "/api/teste-front-end/junior/tecnologia/lista-produtos/produtos.json"
  );

  const data = await response.json();
  return data;
};

export const useRequestProductData = () => {
  return useQuery<IResponseData>({
    queryKey: ["product_data"],
    queryFn: () => RequestProductData(),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};
