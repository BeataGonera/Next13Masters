import type { FC } from "react";
import { formatMoney } from "../utils";
import type { ProductListItemFragmentFragment } from "@/gql/graphql";

type ProductDescriptionProps = {
	product: ProductListItemFragmentFragment;
};

export const ProductDescription: FC<ProductDescriptionProps> = ({
	product,
}) => {
	return (
		<div className="flex flex-col gap-4">
			<h1 className="text-2xl font-bold text-gray-800">
				{product.name}
			</h1>
			<h5 className="text-lg">{formatMoney(product.price / 100)}</h5>
			<h6 className="text-gray-500">{product.description}</h6>
			<p className="text-xs font-bold text-gray-500">In stock</p>
		</div>
	);
};