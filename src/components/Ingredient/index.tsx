import { Image, Pressable, PressableProps, Text } from "react-native";

import { styles } from "./styles";

export type IgredientProps = {
	name: string;
	image: string;
	selected?: boolean;
};

export function Ingredient({
	name,
	image,
	selected = false,
	...rest
}: IgredientProps & PressableProps) {
	return (
		<Pressable
			style={[styles.container, selected && styles.selected]}
			{...rest}
		>
			<Image
				style={styles.image}
				source={require("@/assets/tomato.png")}
			/>
			<Text style={styles.title}>Maçã</Text>
		</Pressable>
	);
}
