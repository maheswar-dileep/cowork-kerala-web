import apiClient from '@/lib/api-client';

export interface City {
    _id: string;
    name: string;
    description: string;
    image: string;
    isActive: boolean;
}

export interface Workspace {
    id: string;
    spaceId: string;
    spaceName: string;
    spaceType: string;
    city: City;
    spaceCategory: string;
    shortDescription?: string;
    longDescription?: string;
    amenities: string[];
    pricing: {
        hotDesk?: number;
        dedicatedDesk?: number;
        privateOffice?: number;
    };
    location: {
        address?: string;
        pincode?: string;
        latitude?: number;
        longitude?: number;
    };
    contact: {
        name?: string;
        email?: string;
        phone?: string;
    };
    images: string[];
    status: 'active' | 'inactive' | 'pending';
    isFeatured: boolean;
}

export interface GetWorkspacesParams {
    city?: string;
    page?: number;
    limit?: number;
    search?: string;
}

export interface WorkspacesResponse {
    success: boolean;
    data: Workspace[];
    pagination: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
}

export interface WorkspaceResponse {
    success: boolean;
    data: Workspace;
}

export const getWorkspaces = async (params: GetWorkspacesParams = {}): Promise<WorkspacesResponse | null> => {
    try {
        const response = await apiClient.get('/api/v1/spaces', { params });
        return response.data;
    } catch (error) {
        console.error('Error fetching workspaces:', error);
        return null;
    }
};

export const getWorkspaceById = async (id: string): Promise<WorkspaceResponse | null> => {
    try {
        const response = await apiClient.get(`/api/v1/spaces/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching workspace:', error);
        return null;
    }
};
