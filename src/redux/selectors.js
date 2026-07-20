// campers selectors
export const selectCampers = state => state.campers.items;
export const selectSelectedCamper = state => state.campers.selectedCamper;
export const selectLoading = state => state.campers.loading;
export const selectError = state => state.campers.error;
export const selectMore = state => state.campers.hasMore;

// filters selectors
export const selectFilters = state => state.filters;
export const selectLocation = state => state.filters.location;
export const selectFormFilter = state => state.filters.form;
export const selectEngineFilter = state => state.filters.engine;
export const selectTransmissionFilter = state => state.filters.transmission;
export const selectPage = state => state.filters.page;
