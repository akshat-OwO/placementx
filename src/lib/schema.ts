export type Placement = {
    name: string;
    role: string;
    placed_students: number;
    package: string;
};

export interface PlacementListProps {
    placements: Placement[];
}
