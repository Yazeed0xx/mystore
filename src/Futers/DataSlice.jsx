// productsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch products from API
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await axios.get('https://6685a3abb3f57b06dd4d6580.mockapi.io/products');
    return response.data;
  }
);
export const fetchProductDetails = createAsyncThunk(
    'products/fetchProductDetails',
    async (id) => {
      const response = await axios.get(`https://6685a3abb3f57b06dd4d6580.mockapi.io/products/${id}`);
      return response.data;
    }
  );
  

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [], // For products list
    status: 'idle',
    error: null,
    searchTerm: '', 
    selectedCategory: 'all',
    productDetailsStatus: 'idle',
    selectedProduct: null, // For single product details


  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      }) .addCase(fetchProductDetails.pending, (state) => {
        state.productDetailsStatus = 'loading';
      })
      .addCase(fetchProductDetails.fulfilled, (state, action) => {
        state.selectedProduct = action.payload;
        state.productDetailsStatus = 'succeeded';
      })
      .addCase(fetchProductDetails.rejected, (state, action) => {
        state.productDetailsStatus = 'failed';
        state.error = action.error.message;
      });
      
  },
});

export const { setSearchTerm, setCategory } = productsSlice.actions;

// Selector to get filtered products
export const selectFilteredProducts = (state) => {
  const { items, searchTerm, selectedCategory } = state.products;
  
  return items.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearchTerm;
  });
};

export default productsSlice.reducer;
