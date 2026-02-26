export const TICKET_STATUS_MAP = {
  ISSUED: { label: "発券済み" },
  CALLED: { label: "呼出中" },
  COMPLETED: { label: "完了" },
  CANCELED: { label: "キャンセル" },
} as const;

export const STORE_TYPE_MAP = {
  ATTRACTION: { label: "企画" },
  FOOD: { label: "模擬店" },
};
