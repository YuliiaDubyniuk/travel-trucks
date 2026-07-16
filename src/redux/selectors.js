import { createSelector } from '@reduxjs/toolkit';

// campers selectors
export const selectCampers = state => state.campers.items;
export const selectSelectedCamper = state => state.campers.selectedCamper;
export const selectLoading = state => state.campers.loading;
export const selectError = state => state.campers.error;

// filters selectors
export const selectFilters = state => state.filters;
export const selectFormFilter = state => state.filters.form;
export const selectEngineFilter = state => state.filters.engine;
export const selectTransmissionFilter = state => state.filters.transmission;

export const selectFilteredCampers = createSelector(
  [
    selectCampers,
    selectFormFilter,
    selectEngineFilter,
    selectTransmissionFilter,
  ],
  (campers, form, engine, transmission) => {
    return campers.filter(camper => {
      const matchesForm = !form || camper.form === form;

      const matchesEngine = !engine || camper.engine === engine;

      const matchesTransmission =
        !transmission || camper.transmission === transmission;

      return matchesForm && matchesEngine && matchesTransmission;
    });
  }
);
