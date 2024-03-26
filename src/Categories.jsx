import axios from "axios";

const apiUrl = "https://northwind.vercel.app/api/suppliers";

//action types

export const FETCH_CATEGORIES_SUCCESS = "Fetch_Categories";
export const ADD_CATEGORY = "Add_Category";
export const UPDATE_CATEGORY = "Update_Category";
export const DELETE_CATEGORY = "Delete_Category";

//Action Creaters

export const fetchCategoriesSuccess = (categories) => ({
  //response.data =categories
  type: FETCH_CATEGORIES_SUCCESS,
  payload: categories,
});

export const addCategorySucccess = (category) => ({
  type: ADD_CATEGORY,
  payload: category,
});

export const updateCategorySuccess = (id, updates) => ({
  type: UPDATE_CATEGORY,
  payload: { id, updates },
});

export const deleteCategorySuccess = (id) => ({
  type: DELETE_CATEGORY,
  payload: id,
});

export const fetchCategories = () => async (dispatch) => {
  try {
    const response = await axios.get(apiUrl);
    dispatch(fetchCategoriesSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
};

export const addCategory = (category) => async (dispatch) => {
  try {
    const response = await axios.post(apiUrl, category);
    dispatch(addCategorySucccess(response.data));
  } catch (error) {
    console.log(error);
  }
};

export const updateCategory = (id, updates) => async (dispatch) => {
  try {
    await axios.put(`${apiUrl}/${id}`, updates);
    dispatch(updateCategorySuccess(id, updates));
  } catch (error) {
    console.log(error);
  }
};

export const DeleteCategory = (id) => async (dispatch) => {
  try {
    await axios.delete(`${apiUrl}/${id}`);
    dispatch(deleteCategorySuccess(id));
  } catch (error) {
    console.log(error);
  }
};
