import { CircularProgress, Fade } from '@mui/material';

export default function OnSubmit({ Prograss }: { Prograss: boolean }) {
  return (
    <div className=" mx-10 max-w-screen-mm">
      {Prograss ? (
        <CircularProgress />
      ) : (
        <div>
          <div className="mt-4 flex justify-center">
            <Fade in={!Prograss}>
              <div className="">
                <div className="text-primary-100 text-2xl text-center">
                  전송완료!
                </div>
              </div>
            </Fade>
          </div>
        </div>
      )}
    </div>
  );
}
