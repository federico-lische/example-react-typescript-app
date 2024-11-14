import { AxiosResponse } from "axios";
import axiosConfig from "../utils/common-http";

/**
 * Represents a user with their basic information.
 */
export interface User {
	id: number;
	name: string;
	email: string;
	username: string;
}

/**
 * Fetches a list of users from the server.
 *
 * @returns {Promise<User[]>} A promise that resolves to an array of User objects.
 */
export const getUsersService = async (): Promise<User[]> => {
  const response: AxiosResponse<User[]> = await axiosConfig.get("/users");
	const users: User[] = response.data;
  return users;
};

/**
 * Fetches a user by their ID.
 *
 * @param id - The ID of the user to fetch.
 * @returns A promise that resolves to the user data.
 */
export const getUserByIdService = async (id: number): Promise<User> => {
	const response: AxiosResponse<User> = await axiosConfig.get(`/users/${id}`);
	return response.data;
};

/**
 * Adds a new user by sending a POST request to the "/users" endpoint.
 *
 * @param name - The name of the user to be added.
 * @param email - The email of the user to be added.
 * @param username - The username of the user to be added.
 * @returns A promise that resolves to the added user.
 */
export const addUserService = async (name: string, email: string, username: string): Promise<User> => {
	const response: AxiosResponse<User> = await axiosConfig.post("/users", {
		name: name,
		email: email,
		username: username,
	});
	return response.data;
}

/**
 * Edits a user with the given id by updating their name, email, and username.
 *
 * @param {number} id - The unique identifier of the user to be edited.
 * @param {string} name - The new name of the user.
 * @param {string} email - The new email address of the user.
 * @param {string} username - The new username of the user.
 * @returns {Promise<User>} A promise that resolves to the updated user object.
 */
export const editUserService = async (id: number, name: string, email: string, username: string): Promise<User> => {
	const response: AxiosResponse<User> = await axiosConfig.put(`/users/${id}`, {
		name: name,
		email: email,
		username: username,
	});
	return response.data;
}

/**
 * Deletes a user by their ID.
 *
 * @param id - The ID of the user to delete.
 * @returns A promise that resolves when the user is deleted.
 */
export const deleteUserService = async (id: number): Promise<void> => {
	await axiosConfig.delete(`/users/${id}`);
}
