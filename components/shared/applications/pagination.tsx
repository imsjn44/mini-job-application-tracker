"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { formUrlQuery } from "@/lib/constants/utils";

type PaginationProps = {
  page: number | string;
  totalPages: number;
  urlParamName?: string;
};
const Pagination = ({ page, totalPages, urlParamName }: PaginationProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Handle Page Change
  const onClick = (btnType: string) => {
    const pageValue = btnType === "next" ? Number(page) + 1 : Number(page) - 1;

    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: urlParamName || "page",
      value: pageValue.toString(),
    });

    router.push(newUrl, { scroll: false });
  };

  return (
    <div className="flex gap-2">
      <Button
        size="lg"
        variant="outline"
        className="w-14 bg-[#A281A7] hover:bg-[#775E7B]"
        onClick={() => onClick("prev")}
        disabled={Number(page) <= 1}
      >
        Prev
      </Button>
      <span className="text-xs font-bold mt-2">
        {Number(page)}/{totalPages}
      </span>
      <Button
        size="lg"
        variant="outline"
        className="w-14 bg-[#A281A7] hover:bg-[#775E7B]"
        onClick={() => onClick("next")}
        disabled={Number(page) >= totalPages}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
