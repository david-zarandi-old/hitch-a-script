export default function HMR(): void {
  new EventSource('/esbuild').addEventListener('change', () => location.reload());
}