type Props = {
  totalPages: number;
  maxPageVisible: number;
  currentPage: number;
};

export function getPageNumbers({ totalPages, maxPageVisible, currentPage }: Props): number[] {
  const half = Math.round(maxPageVisible / 2);
  let to = maxPageVisible;

  if (currentPage + half >= totalPages) {
    to = totalPages;
  } else if (currentPage > half) {
    to = currentPage + half;
  }
  let from = to - maxPageVisible;
  if (from < 0) {
    from = 0;
    to = totalPages;
    return Array.from({ length: totalPages }, (_, i) => i + 1 + from);
  }

  return Array.from({ length: maxPageVisible }, (_, i) => i + 1 + from);
}
