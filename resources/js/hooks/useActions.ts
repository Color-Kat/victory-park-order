import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";

import { testActions } from "@/store/test/test.slice";

const actions = {
    ...testActions
};

export const useActions = () => {
    const dispatch = useDispatch();
    return useMemo(() => bindActionCreators(actions, dispatch), [dispatch]);
};