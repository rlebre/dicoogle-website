import Cookies from 'js-cookie';
import React, { createContext, useCallback, useContext, useState } from 'react';
import styles from './cookies-consent.module.scss';

export type CookieConsentState = 'ACCEPTED' | 'DECLINED' | 'NA';

const CookieConsentStateContext = createContext(Cookies.get('cookies-consent') || 'NA');
const CookieConsentDispatchContext = createContext(null);

const CookiesConsentBanner = () => {
  const chose = useCookieConsentState();
  const setChose = useCookieConsentDispatch();

  const cookiesAccepted = useCallback(
    (choice: CookieConsentState) => {
      setChose(choice);
      Cookies.set('cookies-consent', `${choice}`, { expires: 30 });
    },
    [setChose]
  );

  return chose === 'NA' ? (
    <div className={styles.cookies__consent}>
      <span className='font-medium w-7/8'>
        This website uses cookies to ensure to gather anonymous data for statistical purposes. If you decline we will
        stop to track your session.
      </span>
      <div className='flex flex-wrap gap-2 justify-end'>
        <button
          className={styles.cookies__accept}
          onClick={() => {
            cookiesAccepted('ACCEPTED');
          }}
        >
          Accept
        </button>
        <button className={styles.cookies__decline} onClick={() => cookiesAccepted('DECLINED')}>
          Decline
        </button>
      </div>
    </div>
  ) : null;
};

export const CookieConsentProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useState<CookieConsentState>(
    (Cookies.get('cookies-consent') as CookieConsentState) || 'NA'
  );

  return (
    <CookieConsentDispatchContext.Provider value={dispatch}>
      <CookieConsentStateContext.Provider value={state}>{children}</CookieConsentStateContext.Provider>
    </CookieConsentDispatchContext.Provider>
  );
};

export const useCookieConsentDispatch = () => useContext(CookieConsentDispatchContext);
export const useCookieConsentState = () => useContext(CookieConsentStateContext);

export default CookiesConsentBanner;
