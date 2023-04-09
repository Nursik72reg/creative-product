import { lazy, Suspense } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Modal } from '@/shared/ui/Modal/Modal';
import { Loader } from '@/shared/ui/Loader/Loader';

const LoginForm = lazy(() => import('../LoginForm/LoginForm'));

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void
}
export const LoginModal = (props: LoginModalProps) => {
    const { className, isOpen, onClose } = props;
    return (
        <Modal
            className={classNames('', {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <Suspense fallback={<Loader />}>
                <LoginForm onClose={onClose} />
            </Suspense>
        </Modal>
    );
};
