// Wrap the EditPrompt component in a Suspense boundary
"use client";

import { Suspense } from 'react';
import EditPrompt from '@components/EditPrompt';

const UpdatePromptPage = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <EditPrompt />
        </Suspense>
    );
};

export default UpdatePromptPage;
