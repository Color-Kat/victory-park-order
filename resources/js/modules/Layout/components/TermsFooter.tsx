import React, { memo } from 'react';
import {Link} from "react-router-dom";
import {CallRequest} from "@components/CallRequest/CallRequest.tsx";

export const TermsFooter: React.FC = memo(() => {
    return (
        <div className="bg-app w-full px-3 py-2 text-xs underline absolute bottom-0 left-0 text-gray-600 sm:gap-5 gap-2 text-right flex flex-wrap justify-end">
            <a href="/personal-data" target="_blank">Политика обработки персональных данных</a>
            <a href="/terms-of-service" target="_blank">Пользовательское соглашение</a>
        </div>
    );
});