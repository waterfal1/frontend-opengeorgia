import './loading.css';

export function LoadingComponent() {
  return (
    <div className="wrapper">
      <div className="spinner">
        <div className="bounce1" />
        <div className="bounce2" />
        <div className="bounce3" />
      </div>
    </div>
  );
}
