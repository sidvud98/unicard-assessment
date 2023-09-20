import { configureStore } from '@reduxjs/toolkit';

import resolution from './resolution';
import input from './input';

const store = configureStore({
    reducer: { resolution, input },
});

export default store;
