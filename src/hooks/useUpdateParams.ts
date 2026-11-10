"use client"

import { usePathname, useRouter, useSearchParams } from 'next/navigation';


export default function useUpdateParams() {


  const router = useRouter();
  const pathname = usePathname() ?? "/products";
  const searchParams = useSearchParams();

  //  changing the URL -------------------------------------

  function push (params: URLSearchParams) {
    const qs = params.toString();
    router.push(qs ? `${pathname}?${qs}`: pathname, { scroll: false });
  }

  function update(key: string,  value: string | null) {
    const params = new URLSearchParams(searchParams?.toString() ?? "");
    if (value) params.set(key, value);
    else params.delete(key);
    params.delete("page");
    push(params);
  }

  function toggle(key: string, value: string ) {
    const params = new URLSearchParams(searchParams?.toString() ?? "");
    const current =  params.get(key)?.split(",").filter(Boolean) ?? [];

    const next =  current.includes(value)
    ? current.filter((v) => v !== value)
    : [...current, value];

    if (next.length) params.set(key, next.join(","));
    else params.delete(key);
    params.delete("page");
    push(params);


  }

  function updateMany(entries: Record<string, string | null>) {
    const params = new URLSearchParams(searchParams?.toString() ?? "");
    for(const [key, value] of Object.entries(entries)) {
      if (value) params.set(key, value);
      else params.delete(key)
    }
    push(params)
  }

  function setPage(n: number) {
    const params = new URLSearchParams(searchParams?.toString() ?? "");
    if(n <= 1) params.delete("page");
    else params.set("page", String(n));
    const qs = params.toString();
    router.push(qs ? `${pathname}?${qs}` : pathname);
  }

  function reset() {
    router.push(pathname, {scroll: false})
  }

  

  

  return { update,toggle,updateMany, reset, setPage, searchParams, pathname, router };
}
