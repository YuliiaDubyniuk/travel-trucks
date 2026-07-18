import { createSelector } from '@reduxjs/toolkit';

// campers selectors
export const selectCampers = state => state.campers.items;
export const selectSelectedCamper = state => state.campers.selectedCamper;
export const selectLoading = state => state.campers.loading;
export const selectError = state => state.campers.error;

// filters selectors
export const selectFilters = state => state.filters;
export const selectLocation = state => state.filters.location;
export const selectFormFilter = state => state.filters.form;
export const selectEngineFilter = state => state.filters.engine;
export const selectTransmissionFilter = state => state.filters.transmission;

export const selectFilteredCampers = createSelector(
  [
    selectCampers,
    selectLocation,
    selectFormFilter,
    selectEngineFilter,
    selectTransmissionFilter,
  ],
  (campers, location, form, engine, transmission) => {
    return campers.filter(camper => {
      const matchesLocation =
        !location ||
        camper.location.toLowerCase().includes(location.toLowerCase());
      const matchesForm = !form || camper.form === form;

      const matchesEngine = !engine || camper.engine === engine;

      const matchesTransmission =
        !transmission || camper.transmission === transmission;

      return (
        matchesLocation && matchesForm && matchesEngine && matchesTransmission
      );
    });
  }
);
