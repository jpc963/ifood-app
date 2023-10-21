import { useContext, useEffect } from "react"
import { AuthContext } from "../../contexts/auth"

import { storage } from "../../../firebaseConfig"
import { getDownloadURL, ref } from "firebase/storage"

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"
import { UploadButton, Logo } from "./styles"

export const ProfilePicture = () => {
	const { profilePicture, setProfilePicture, pickImage, user } = useContext(AuthContext)

	useEffect(() => {
		const getProfilePicture = async () => {
			try {
				const url = await getDownloadURL(ref(storage, `users/${user.uid}`))
				setProfilePicture(url)
			} catch (error) {
				console.log("[GET_PROFILE_PICTURE]", error)
			}
		}

		getProfilePicture()
	}, [user.uid])

	return (
		<>
			{profilePicture ? (
				<Logo source={{ uri: profilePicture }} />
			) : (
				<UploadButton onPress={() => pickImage()}>
					<MaterialCommunityIcons
						name="camera-plus-outline"
						size={40}
						color={"#EF233C"}
					/>
				</UploadButton>
			)}
		</>
	)
}
