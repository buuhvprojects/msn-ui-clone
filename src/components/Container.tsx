import React, { useMemo } from 'react';
import styles from './Container.module.scss';

interface Props {
    children: React.ReactNode;
    page?: string;
}

function PageContainer({ children, page }: Props) {
    const pages: Record<string, string> = {
        login: styles.Container_login,
        container: 'container',
    };
    const pageClass = useMemo(() => {
        if (page) return pages[page] || 'empty-class-name';
        return 'empty-class-name';
    }, [page]);
    return <div className={pageClass}>{children}</div>;
}
export default PageContainer;