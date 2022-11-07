export type Group = {
  id: number;
  name: string;
  companyId: number;
  reportTemplate: object;
};

export type CompanyGroupOption = {
  label: string;
  value: number;
  key: number;
};

export type CompanyGroupOptionResult = {
  groups: CompanyGroupOption[];
};
