export interface Project {
  imgURL: string[];
  title: string;
  subtitleUA: string;
  subtitleEN: string;
  square: number;
  wallMaterialEN: string;
  wallMaterialUA: string;
  additionalInfoEN: string;
  additionalInfoUA: string;
  video: string;
}

export interface ProjectTable {
  imgURL: string[];
  title: string;
  subtitleUA: string;
  subtitleEN: string;
  square: number;
  wallMaterialEN: string;
  wallMaterialUA: string;
  additionalInfoEN: string;
  additionalInfoUA: string;
  video: string;
  isEditing?: boolean
}
