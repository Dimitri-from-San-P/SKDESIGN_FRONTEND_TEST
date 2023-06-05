import React from 'react';
import './PersonInfo.css';

function PersonInfo({
  personDetail,
  setShowInfo,
}: {
  personDetail: any;
  setShowInfo: React.Dispatch<React.SetStateAction<boolean>>;
}): JSX.Element {
  const addressStreet =
    personDetail && personDetail.address ? personDetail.address.streetAddress : null;

  const addressCity = personDetail && personDetail.address ? personDetail.address.city : null;

  const addressState = personDetail && personDetail.address ? personDetail.address.state : null;

  const addressZip = personDetail && personDetail.address ? personDetail.address.zip : null;

  const hideInfo = (): void => setShowInfo(false);

  return (
    <div className="conteiner">
      <div>
        Выбран пользователь{' '}
        <b>
          {personDetail.firstName} {personDetail.lastName}
        </b>
      </div>
      <div>
        Описание:
        <textarea defaultValue={personDetail.description} />
      </div>
      <div>
        Адрес проживания: <b>{addressStreet}</b>
      </div>
      <div>
        Город: <b>{addressCity}</b>
      </div>
      <div>
        Провинция/штат: <b>{addressState}</b>
      </div>
      <div>
        Индекс: <b>{addressZip}</b>
      </div>
      <button type="button" onClick={hideInfo}>
        Скрыть данные
      </button>
    </div>
  );
}

export default PersonInfo;
