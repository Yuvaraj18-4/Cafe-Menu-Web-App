import { Toaster as Sonner } from 'sonner@2.0.3';

export const Toaster = () => {
  return (
    <Sonner
      position="top-right"
      toastOptions={{
        style: {
          background: 'white',
          border: '1px solid #fbbf24',
          color: '#92400e',
        },
      }}
    />
  );
};