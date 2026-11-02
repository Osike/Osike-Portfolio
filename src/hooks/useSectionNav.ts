import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const useSectionNav = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return useCallback(
    (sectionId: string) => {
      if (pathname !== '/') {
        navigate({ pathname: '/', hash: sectionId });
        return;
      }
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    },
    [navigate, pathname]
  );
};
