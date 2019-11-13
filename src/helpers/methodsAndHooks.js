export const sliceText = (currentOverview) => {
    const slicedOverview = currentOverview.slice(0, 200);

    const newOverview = `${slicedOverview}...`;

    return newOverview;
};
