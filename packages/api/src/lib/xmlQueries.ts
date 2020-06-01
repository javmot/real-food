export const getGroupsQuery = () => `<?xml version="1.0" encoding="utf-8"?>
  <foodquery>
    <type level="3"/>
    <selection>
      <atribute name="fg_id"/>
      <atribute name="fg_ori_name"/>
      <atribute name="fg_eng_name"/>
    </selection>
    <order ordtype="ASC">
      <atribute3 name="fg_id"/>
    </order>
  </foodquery>
`;

export const getGroupQuery = (
	groupId: string
): string => `<?xml version="1.0" encoding="utf-8"?>
  <foodquery>
    <type level="1"/>
    <selection>
      <atribute name="f_id"/>
      <atribute name="f_ori_name"/>
      <atribute name="langual"/>
      <atribute name="f_eng_name"/>
      <atribute name="f_origen"/>
    </selection>
    <condition>
      <cond1>
        <atribute1 name="foodgroup_id"/>
      </cond1>
      <relation type="EQUAL"/>
      <cond3>${groupId}</cond3>
    </condition>
    <condition>
      <cond1>
        <atribute1 name="f_origen"/>
      </cond1>
      <relation type="EQUAL"/>
      <cond3>BEDCA</cond3>
    </condition>
    <order ordtype="ASC">
      <atribute3 name="f_eng_name"/>
    </order>
  </foodquery>
`;

export const getFoodQuery = (
	foodId: string
): string => `<?xml version="1.0" encoding="utf-8"?>
  <foodquery>
      <type level="2"/>
      <selection>
          <atribute name="f_id"/>
          <atribute name="f_ori_name"/>
          <atribute name="f_eng_name"/>
          <atribute name="c_id"/>
          <atribute name="c_ori_name"/>
          <atribute name="c_eng_name"/>
          <atribute name="eur_name"/>
          <atribute name="componentgroup_id"/>
          <atribute name="glos_esp"/>
          <atribute name="glos_ing"/>
          <atribute name="cg_descripcion"/>
          <atribute name="cg_description"/>
          <atribute name="best_location"/>
          <atribute name="v_unit"/>
          <atribute name="moex"/>
          <atribute name="mu_id"/>
          <atribute name="mu_descripcion"/>
          <atribute name="mu_description"/>
      </selection>
      <condition>
          <cond1>
              <atribute1 name="f_id"/>
          </cond1>
          <relation type="EQUAL"/>
          <cond3>${foodId}</cond3>
      </condition>
      <condition>
          <cond1>
              <atribute1 name="publico"/>
          </cond1>
          <relation type="EQUAL"/>
          <cond3>1</cond3>
      </condition>
      <order ordtype="ASC">
          <atribute3 name="componentgroup_id"/>
      </order>
  </foodquery>
`;
