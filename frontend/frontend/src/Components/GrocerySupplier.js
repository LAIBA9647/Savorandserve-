import React from 'react';

import { FaMoneyBillAlt, FaHandsHelping, FaShoppingBasket, FaBullhorn } from 'react-icons/fa';

const GrocerySupplier = () => {
  return (
    <div className="grocery-supplier">
      <h2 className="section-title">Why Become a Grocery Supplier</h2>
      <h3 className="urdu-title">گروسری سپلائر کیوں بنیں؟</h3>

      <div className="benefits">
        {/* Benefit 1 */}
        <div className="benefit">
          <FaMoneyBillAlt className="icon" />
          <h4>Increase Daily Sales</h4>
          <p className="benefit-description">
            By registering on the My Impact Meter platform, you can tap into a new market of potential customers who have been gifted vouchers to purchase groceries, thus increasing your daily revenue.
          </p>
          <p className="urdu-description">اپنی آمدن بڑھا سکتے ہیں</p>
        </div>

        {/* Benefit 2 */}
        <div className="benefit">
          <FaHandsHelping className="icon" />
          <h4>Positive Social Impact</h4>
          <p className="benefit-description">
            Once you join our network of service providers, you start providing an essential service to people in need, helping to make a positive impact in the community and society.
          </p>
          <p className="urdu-description">سماجی بہتری</p>
        </div>

        {/* Benefit 3 */}
        <div className="benefit">
          <FaShoppingBasket className="icon" />
          <h4>Efficient Redemption Process</h4>
          <p className="benefit-description">
            With a unique tracking ID, beneficiaries can easily redeem their grocery vouchers at your outlet, which ensures that the vouchers are used for their intended purpose.
          </p>
          <p className="urdu-description">سروس کے حصول کا موثر طریقہ کار</p>
        </div>

        {/* Benefit 4 */}
        <div className="benefit">
          <FaBullhorn className="icon" />
          <h4>Cost-Effective Advertising</h4>
          <p className="benefit-description">
            By becoming a registered service provider on My Impact Meter, you will benefit from free exposure to a wider audience.
          </p>
          <p className="urdu-description">کاروبار کی مفت تشہیری</p>
        </div>
      </div>
    </div>
  );
};

export default GrocerySupplier;
