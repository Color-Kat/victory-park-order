import React, { memo } from 'react';

export const TermsFooter: React.FC = memo(() => {
    return (
        <div className="bg-app w-full px-3 py-2 text-xs absolute bottom-0 left-0 text-gray-600 sm:gap-5 gap-2 flex flex-wrap">
            <p className="flex- mr-auto leading-tight max-w-3xl">Обращаем ваше внимание на то, что данный интернет-сайт носит исключительно информационный характер и ни при каких условиях не является публичной офертой, определяемой положениями Статьи 437 (2) Гражданского кодекса РФ.</p>

            <div className="flex flex-wrap justify-end sm:gap-5 gap-2">
                <a href="/personal-data" target="_blank" className="underline text-right">Политика обработки персональных данных</a>
                <a href="/terms-of-service" target="_blank" className="underline text-right">Пользовательское соглашение</a>
                <a href="/privacy-policy" target="_blank" className="underline text-right">Политика конфиденциальности</a>
            </div>
        </div>
    );
});