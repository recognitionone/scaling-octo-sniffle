export const getGalleryStateList = (store) => store.list

export const forecastSampleSelector = (store) =>
  getGalleryStateList(store) ? {
    Monday: getGalleryStateList(store)[0].main,
    Tuesday: getGalleryStateList(store)[1].main,
    Wednesday: getGalleryStateList(store)[2].main,
    Thursday: getGalleryStateList(store)[3].main,
    Friday: getGalleryStateList(store)[4].main,
  } : {
    Loading: 'Loading'
  };
