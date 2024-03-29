import apiClient from "../../utils/api-client.js";

export const signUp = (user, profile) => {
    const body = new FormData();
    body.append("name", user.name);
    body.append("email", user.email);
    body.append("password", user.password);
    body.append("deliveryAddress", user.deliveryAddress);
    body.append("profilePic", profile);

    return apiClient.post("user/signup", body);

}
