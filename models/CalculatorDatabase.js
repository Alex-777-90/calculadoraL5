module.exports = (sequelize,DataTypes) => {
    
    const Data = sequelize.define("Data",
     {
         id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          operation:{
            type: DataTypes.STRING, 
          },
          number1:{
            type: DataTypes.INTEGER,
          },
          number2:{
            type: DataTypes.INTEGER,
          },
          valueResult:{
            type: DataTypes.INTEGER,
          },
          nameUser:{
            type: DataTypes.STRING, 
          },
          createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
          },
          updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
          },
     },
     {
        tableName: "datas",
        timestamps: false,
     }
  );

   return Data;
}