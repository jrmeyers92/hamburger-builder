// import { array } from "prop-types";
import React from "react";
import classes from "./Burger.module.css";
import BurgerIngrident from "./BurgerIngridient/BurgerIngrident";

const burger = (props) => {
	let transformedIngredients = Object.keys(props.ingredients)
		.map((igKey) => {
			return [...Array(props.ingredients[igKey])].map((_, i) => {
				return <BurgerIngrident key={igKey + i} type={igKey} />;
			});
		})
		.reduce((arr, el) => {
			return arr.concat(el);
		}, []);
	if (transformedIngredients.length === 0) {
		transformedIngredients = <p>Please start adding ingredients!</p>;
	}

	return (
		<div className={classes.Burger}>
			<BurgerIngrident type='bread-top' />
			{transformedIngredients}
			<BurgerIngrident type='bread-bottom' />
		</div>
	);
};

export default burger;
